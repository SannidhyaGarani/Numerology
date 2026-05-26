import React, { useState, useEffect, useRef } from "react";
import { db } from "../../components/Firebase";
import {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
  query,
  orderBy,
  deleteDoc,
  doc,
  updateDoc,
  writeBatch,
} from "firebase/firestore";

const CATEGORIES = [
  "Triple 9",
  "Double Digit",
  "786 Series",
  "Quad 1",
  "Sequence",
  "Mirror Numbers",
  "Angel Numbers",
  "Business Numbers",
];

const STATUSES = ["Available", "Reserved", "Sold"];

const sidebarItems = ["Dashboard", "Numbers", "Orders", "Users"];

const Admin = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isCsvModalOpen, setIsCsvModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [numbers, setNumbers] = useState([]);
  const [editingNumber, setEditingNumber] = useState(null);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);

  const loadNumbers = async () => {
    try {
      const q = query(collection(db, "vipNumbers"), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);
      setNumbers(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    } catch (e) {
      console.log("Error loading numbers:", e);
    }
  };

  const loadUsers = async () => {
    try {
      const q = query(collection(db, "users"), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);
      setUsers(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    } catch { console.log("No users yet"); }
  };

  const loadOrders = async () => {
    try {
      const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);
      setOrders(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    } catch { console.log("No orders yet"); }
  };

  useEffect(() => {
    loadNumbers();
    loadUsers();
    loadOrders();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this number?")) return;
    await deleteDoc(doc(db, "vipNumbers", id));
    setNumbers((prev) => prev.filter((p) => p.id !== id));
  };

  const handleEdit = (num) => {
    setEditingNumber(num);
    setIsEditModalOpen(true);
  };

  const stats = [
    { label: "Total Numbers", value: numbers.length, hint: "In catalog" },
    { label: "Available", value: numbers.filter(n => (n.status || "Available") === "Available").length, hint: "Ready to sell" },
    { label: "Sold", value: numbers.filter(n => n.status === "Sold").length, hint: "Completed sales" },
  ];

  const statusColor = (s) => {
    if (s === "Available") return "bg-emerald-50 text-emerald-700 border-emerald-100";
    if (s === "Reserved") return "bg-amber-50 text-amber-700 border-amber-100";
    if (s === "Sold") return "bg-sky-50 text-sky-700 border-sky-100";
    return "bg-slate-50 text-slate-700 border-slate-100";
  };

  const renderStats = () => (
    <section className="grid gap-5 md:grid-cols-3 mb-10">
      {stats.map((c) => (
        <article key={c.label} className="bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="p-5">
            <p className="text-xs font-medium tracking-wide text-slate-500 uppercase">{c.label}</p>
            <p className="mt-3 text-2xl font-semibold text-slate-900">{c.value}</p>
            <p className="mt-2 text-xs font-medium text-slate-400">{c.hint}</p>
          </div>
          <div className="h-1.5 w-full rounded-b-xl bg-gradient-to-r from-violet-600 via-purple-400 to-amber-300" />
        </article>
      ))}
    </section>
  );

  const renderNumbersTable = () => (
    <section className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="px-5 py-4 flex items-center justify-between border-b border-slate-100">
        <div>
          <h2 className="text-sm font-semibold text-slate-900">VIP Numbers</h2>
          <p className="text-xs text-slate-500 mt-0.5">Manage your number catalog</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setIsCsvModalOpen(true)} className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium hover:bg-slate-200">
            Upload CSV
          </button>
          <button onClick={() => setIsAddModalOpen(true)} className="px-3 py-1.5 rounded-lg bg-violet-700 text-white text-xs font-medium shadow-sm hover:bg-violet-800">
            Add Number
          </button>
          <span className="px-3 py-1 rounded-full bg-violet-50 text-xs font-medium text-violet-700">
            {numbers.length} items
          </span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50/60">
            <tr className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              <th className="px-5 py-3">Number</th>
              <th className="px-5 py-3">Category</th>
              <th className="px-5 py-3">MRP</th>
              <th className="px-5 py-3">Price</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {numbers.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/60">
                <td className="px-5 py-3 text-slate-900 font-semibold font-mono tracking-wider">{row.number}</td>
                <td className="px-5 py-3 text-slate-600">{row.category || "-"}</td>
                <td className="px-5 py-3 text-slate-400 line-through">₹{Number(row.mrp || 0).toLocaleString()}</td>
                <td className="px-5 py-3 text-slate-900 font-medium">₹{Number(row.price || 0).toLocaleString()}</td>
                <td className="px-5 py-3">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-medium ${statusColor(row.status || "Available")}`}>
                    {row.status || "Available"}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <div className="flex justify-end gap-2">
                    <button onClick={() => handleEdit(row)} className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 hover:bg-slate-200">Edit</button>
                    <button onClick={() => handleDelete(row.id)} className="px-3 py-1 rounded-lg text-xs font-medium bg-red-50 text-red-600 hover:bg-red-100">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
            {numbers.length === 0 && (
              <tr><td colSpan={6} className="px-5 py-6 text-center text-xs text-slate-500">No numbers yet. Add one or upload CSV.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );

  const renderOrdersTable = () => (
    <section className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-100">
        <h2 className="text-sm font-semibold text-slate-900">Orders</h2>
        <p className="text-xs text-slate-500 mt-0.5">Customer purchase requests</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50/60">
            <tr className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              <th className="px-5 py-3">Order ID</th>
              <th className="px-5 py-3">Number</th>
              <th className="px-5 py-3">Customer</th>
              <th className="px-5 py-3">Amount</th>
              <th className="px-5 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {orders.map((o) => (
              <tr key={o.id} className="hover:bg-slate-50/60">
                <td className="px-5 py-3 font-medium text-slate-900">{o.id.slice(0, 8)}</td>
                <td className="px-5 py-3 font-mono text-slate-700">{o.number || "-"}</td>
                <td className="px-5 py-3 text-slate-600">{o.customerName || o.email || "-"}</td>
                <td className="px-5 py-3 text-slate-900">₹{Number(o.amount || 0).toLocaleString()}</td>
                <td className="px-5 py-3">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-medium ${statusColor(o.status || "Pending")}`}>{o.status || "Pending"}</span>
                </td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr><td colSpan={5} className="px-5 py-6 text-center text-xs text-slate-500">No orders yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );

  const renderUsersTable = () => (
    <section className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-100">
        <h2 className="text-sm font-semibold text-slate-900">Users</h2>
        <p className="text-xs text-slate-500 mt-0.5">{users.length} registered users</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50/60">
            <tr className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              <th className="px-5 py-3">Name</th>
              <th className="px-5 py-3">Email</th>
              <th className="px-5 py-3">Phone</th>
              <th className="px-5 py-3">Joined</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-slate-50/60">
                <td className="px-5 py-3 text-slate-900 font-medium">{u.displayName || u.name || "-"}</td>
                <td className="px-5 py-3 text-slate-600">{u.email || "-"}</td>
                <td className="px-5 py-3 text-slate-600">{u.phone || "-"}</td>
                <td className="px-5 py-3 text-xs text-slate-500">{u.createdAt ? new Date(u.createdAt.toDate?.() || u.createdAt).toLocaleDateString() : "-"}</td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr><td colSpan={4} className="px-5 py-6 text-center text-xs text-slate-500">No users found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );

  const renderContent = () => {
    switch (activeItem) {
      case "Numbers": return <>{renderStats()}{renderNumbersTable()}</>;
      case "Orders": return <>{renderStats()}{renderOrdersTable()}</>;
      case "Users": return <>{renderStats()}{renderUsersTable()}</>;
      default: return <>{renderStats()}<div className="grid gap-6 lg:grid-cols-2">{renderNumbersTable()}{renderOrdersTable()}</div></>;
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-50 text-slate-900">
      <aside className="w-60 border-r border-slate-100 bg-white/80 backdrop-blur-sm flex flex-col">
        <div className="px-6 py-5 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-violet-700 text-white flex items-center justify-center text-sm font-semibold shadow-sm">VN</div>
            <div>
              <p className="text-sm font-semibold tracking-tight text-slate-900">VIP Numbers</p>
              <p className="text-xs text-slate-500">Admin Panel</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {sidebarItems.map((item) => (
            <button key={item} onClick={() => setActiveItem(item)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                item === activeItem ? "bg-violet-50 text-violet-700" : "text-slate-600 hover:bg-slate-50"
              }`}>
              <span>{item}</span>
              {item === activeItem && <span className="h-1.5 w-1.5 rounded-full bg-violet-700" />}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 px-6 py-6 md:px-10 md:py-8">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">VIP Numbers Admin</h1>
            <p className="mt-1 text-sm font-medium tracking-wide text-violet-700 uppercase">{activeItem}</p>
          </div>
        </header>
        {renderContent()}
      </main>

      {/* Add Number Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold text-slate-900">Add VIP Number</h2>
                <p className="text-xs text-slate-500">Enter number details</p>
              </div>
              <button onClick={() => setIsAddModalOpen(false)} className="text-xs font-medium text-slate-500 hover:text-slate-900">Close</button>
            </div>
            <div className="px-6 py-5">
              <NumberForm onSuccess={async () => { setIsAddModalOpen(false); await loadNumbers(); }} />
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && editingNumber && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold text-slate-900">Edit Number</h2>
                <p className="text-xs text-slate-500">Update number details</p>
              </div>
              <button onClick={() => setIsEditModalOpen(false)} className="text-xs font-medium text-slate-500 hover:text-slate-900">Close</button>
            </div>
            <div className="px-6 py-5">
              <NumberForm
                editData={editingNumber}
                onSuccess={async () => { setIsEditModalOpen(false); setEditingNumber(null); await loadNumbers(); }}
              />
            </div>
          </div>
        </div>
      )}

      {/* CSV Upload Modal */}
      {isCsvModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold text-slate-900">Upload CSV</h2>
                <p className="text-xs text-slate-500">Bulk upload VIP numbers</p>
              </div>
              <button onClick={() => setIsCsvModalOpen(false)} className="text-xs font-medium text-slate-500 hover:text-slate-900">Close</button>
            </div>
            <div className="px-6 py-5">
              <CsvUpload onSuccess={async () => { setIsCsvModalOpen(false); await loadNumbers(); }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* ─── Number Form (Add / Edit) ─── */
const NumberForm = ({ onSuccess, editData }) => {
  const [form, setForm] = useState({
    number: editData?.number || "",
    category: editData?.category || "",
    mrp: editData?.mrp || "",
    price: editData?.price || "",

    status: editData?.status || "",
    operator: editData?.operator || "",
    notes: editData?.notes || "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.number || !form.price) { setError("Number and Price are required"); return; }
    setError("");
    setLoading(true);
    try {
      const data = {
        number: form.number.trim(),
        category: form.category,
        mrp: Number(form.mrp) || 0,
        price: Number(form.price) || 0,
        badge: form.category.toUpperCase(),
        status: form.status,
        operator: form.operator,
        notes: form.notes,
      };

      if (editData?.id) {
        await updateDoc(doc(db, "vipNumbers", editData.id), data);
      } else {
        data.createdAt = serverTimestamp();
        await addDoc(collection(db, "vipNumbers"), data);
      }
      if (onSuccess) onSuccess();
    } catch (err) {
      setError("Operation failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all text-sm";
  const labelClass = "text-xs font-semibold text-slate-700 uppercase tracking-wider";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1 col-span-2">
          <label className={labelClass}>Number *</label>
          <input name="number" value={form.number} onChange={handleChange} className={inputClass} placeholder="e.g. 98765 99999" />
        </div>
        <div className="space-y-1">
          <label className={labelClass}>Category</label>
          <select name="category" value={form.category} onChange={handleChange} className={inputClass + " appearance-none bg-white"}>
            <option value="">Select Category</option>
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div className="space-y-1">
          <label className={labelClass}>MRP (₹)</label>
          <input name="mrp" type="number" value={form.mrp} onChange={handleChange} className={inputClass} placeholder="29999" />
        </div>
        <div className="space-y-1">
          <label className={labelClass}>Discounted Price (₹) *</label>
          <input name="price" type="number" value={form.price} onChange={handleChange} className={inputClass} placeholder="15999" />
        </div>
        <div className="space-y-1">
          <label className={labelClass}>Status (Optional)</label>
          <select name="status" value={form.status} onChange={handleChange} className={inputClass + " appearance-none bg-white"}>
            <option value="">Select Status</option>
            {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="space-y-1">
          <label className={labelClass}>Operator (Optional)</label>
          <input name="operator" value={form.operator} onChange={handleChange} className={inputClass} placeholder="e.g. Jio, Airtel" />
        </div>
        <div className="space-y-1 col-span-2">
          <label className={labelClass}>Notes (Optional)</label>
          <textarea name="notes" value={form.notes} onChange={handleChange} className={inputClass + " min-h-[60px]"} placeholder="Any extra info..." rows={2} />
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 pt-2">
        {error && <span className="text-xs font-medium text-red-600">{error}</span>}
        <button type="submit" disabled={loading}
          className="px-8 py-2.5 rounded-xl bg-violet-700 text-white text-sm font-semibold shadow-lg shadow-violet-700/20 hover:bg-violet-800 transition-all disabled:opacity-60">
          {loading ? "Saving..." : editData ? "Update Number" : "Add Number"}
        </button>
      </div>
    </form>
  );
};

/* ─── CSV Upload Component ─── */
const CsvUpload = ({ onSuccess }) => {
  const fileRef = useRef(null);
  const [preview, setPreview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const downloadSample = () => {
    const csv = "number,category,mrp,price,status,operator,notes\n98765 99999,Triple 9,29999,15999,Available,Jio,Premium number\n98765 22222,Double Digit,24999,12999,Available,Airtel,Popular pick\n98765 78678,786 Series,15999,8999,Available,,Divine number\n98765 12345,Sequence,12999,7999,Available,Vi,Easy to remember";
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "sample_vip_numbers.csv"; a.click();
    URL.revokeObjectURL(url);
  };

  const parseCSV = (text) => {
    const lines = text.trim().split("\n");
    const headers = lines[0].split(",").map(h => h.trim().toLowerCase());
    return lines.slice(1).filter(l => l.trim()).map(line => {
      const vals = line.split(",").map(v => v.trim());
      const obj = {};
      headers.forEach((h, i) => { obj[h] = vals[i] || ""; });
      return obj;
    });
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const rows = parseCSV(ev.target.result);
      setPreview(rows);
    };
    reader.readAsText(file);
  };

  const handleUpload = async () => {
    if (preview.length === 0) return;
    setLoading(true);
    try {
      const batch = writeBatch(db);
      preview.forEach((row) => {
        const ref = doc(collection(db, "vipNumbers"));
        batch.set(ref, {
          number: row.number || "",
          category: row.category || "",
          mrp: Number(row.mrp) || 0,
          price: Number(row.price) || 0,
          badge: (row.category || "").toUpperCase(),
          status: row.status || "Available",
          operator: row.operator || "",
          notes: row.notes || "",
          createdAt: serverTimestamp(),
        });
      });
      await batch.commit();
      setResult(`Successfully uploaded ${preview.length} numbers!`);
      setPreview([]);
      if (onSuccess) setTimeout(onSuccess, 1500);
    } catch (err) {
      setResult("Upload failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <button type="button" onClick={downloadSample}
          className="px-4 py-2 rounded-lg bg-violet-50 text-violet-700 text-xs font-medium hover:bg-violet-100 transition-colors">
          ↓ Download Sample CSV
        </button>
        <span className="text-xs text-slate-400">Use this format to prepare your data</span>
      </div>

      <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center hover:border-violet-400 transition-colors">
        <input ref={fileRef} type="file" accept=".csv" onChange={handleFile} className="hidden" />
        <button type="button" onClick={() => fileRef.current?.click()} className="text-sm text-slate-600 hover:text-violet-700">
          Click to select CSV file
        </button>
        <p className="text-xs text-slate-400 mt-1">Accepts .csv files only</p>
      </div>

      {preview.length > 0 && (
        <div className="space-y-3">
          <p className="text-xs font-medium text-slate-700">{preview.length} numbers ready to upload:</p>
          <div className="max-h-48 overflow-y-auto rounded-lg border border-slate-100">
            <table className="min-w-full text-xs">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-3 py-2 text-left text-slate-500">Number</th>
                  <th className="px-3 py-2 text-left text-slate-500">Category</th>
                  <th className="px-3 py-2 text-left text-slate-500">MRP</th>
                  <th className="px-3 py-2 text-left text-slate-500">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {preview.map((r, i) => (
                  <tr key={i}>
                    <td className="px-3 py-2 font-mono">{r.number}</td>
                    <td className="px-3 py-2">{r.category}</td>
                    <td className="px-3 py-2">₹{r.mrp}</td>
                    <td className="px-3 py-2">₹{r.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button type="button" onClick={handleUpload} disabled={loading}
            className="w-full py-2.5 rounded-xl bg-violet-700 text-white text-sm font-semibold shadow-lg hover:bg-violet-800 transition-all disabled:opacity-60">
            {loading ? "Uploading..." : `Upload ${preview.length} Numbers`}
          </button>
        </div>
      )}

      {result && <p className={`text-xs font-medium ${result.includes("failed") ? "text-red-600" : "text-emerald-600"}`}>{result}</p>}
    </div>
  );
};

export default Admin;
